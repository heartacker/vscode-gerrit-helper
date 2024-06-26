// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as nls from 'vscode-nls';
const localize = nls.loadMessageBundle();

import path = require('path');
import * as vscode from 'vscode';
import { Git, GitExtension, Repository } from "./api/git";
import { Uri } from 'vscode';


// =======acommit====================================
// 在git的输入栏添加前置消息
function prefixCommit(repository: Repository, prefix: String) {
	repository.inputBox.value = `${prefix}${repository.inputBox.value}`;
}

async function acommit(uri: any) {

	const git = getGitExtension();
	if (!git) {
		return;
	}


	// let items = emojis.map(display_method[method_key]);

	//! vscode.window.showQuickPick(items).then(
	// 	function (selected) {
	// 		if (selected) {
	console.log(uri);
	if (uri) {
		let selectedRepository = git.repositories.find((repository) => {
			return repository.rootUri.path === uri._rootUri.path;
		});
		if (selectedRepository) {
			// prefixCommit(selectedRepository, selected.emoji);
			prefixCommit(selectedRepository, "[feature]");
		}
	} else {
		vscode.commands.executeCommand('workbench.view.scm');
		for (let repo of git.repositories) {
			// prefixCommit(repo, selected.emoji);
			prefixCommit(repo, "[feature]");
		}
	}
	// 		}
	// 	}
	//! );

	return;
}

// =======pushg====================================

// 弹窗确定进行Commit
async function pushCommit(repo: Repository, remoteName: string, branchName: string) {

	const w = vscode.window.createQuickPick();
	w.canSelectMany = false;

	w.title = localize('gerrithelper.exec.push.confirm',
		"Confirm push branch[{0}]-->[{1}]: \'HEAD:ref/for/refs/heads/{2}\'", branchName, remoteName, branchName);
	w.placeholder = "Yes";
	w.items = [
		{ label: "Yes" },
		{ label: "No" },
	];
	w.onDidAccept(async () => {
		const selection = w.activeItems[0];
		w.hide();
		if (selection.label === "Yes") {
			console.log(`git push ${remoteName}  HEAD:refs/heads/${branchName}`);
			// await repo.push(`${remoteName}`, `HEAD:ref/for/refs/heads/${branchName}`)
			let ret = false;
			await repo.push(`${remoteName}`, `HEAD:refs/for/${branchName}`)
				.catch((err: any) => {
					ret = true;
					let msg = localize('gerrit.exec.push.fail', "GerritHelper: push branch fail, check in [Git] output log!");
					vscode.window.showErrorMessage(msg + "\r\n" + err.stderr);
				});
			if (!ret) {
				vscode.window.showInformationMessage(
					localize('gerrit.exec.push.success', "GerritHelper: push branch success, check in [Git] output log!")
				);
			}
			vscode.commands.executeCommand('git.showOutput');
		} else {
			console.log("user Cancelled");
		}
	});

	w.onDidHide(() => w.dispose());
	w.show();
}


//push 相关的处理
// 如果是当前仓库。
async function mainPushG(repo?: Repository | Uri): Promise<void> {

	// check git extension is installed
	const cgit = getGitExtension();
	if (!cgit) {
		console.log("can not identify the special git repo");
		vscode.window.showErrorMessage("未安装\'vscode.git\' 插件,请安装或者启用后重试");
		return;
	}

	console.log(repo);
	if (repo instanceof Uri) {

	} else if (repo !== undefined) {
		let selectedRepository = cgit.repositories.find(
			(rp) => {
				return rp.rootUri.path === repo.rootUri.path;
			}
		);
		if (selectedRepository) {
			return pushg(selectedRepository, repo);
		}
		else {
			vscode.window.showErrorMessage("请在仓库分支执行推送动作！");
			return;
		}
	} else {
		return selectingPush(repo);
	}
}


// 点击按钮推送到当前分支到远程 gerrit 分支
// Gerrit.Helper.pushg
async function pushg(gitr: Repository, uri: any) {
	try {
		let repo = gitr as Repository;
		let branchName = repo.state.HEAD?.name;
		// vscode.window.showInformationMessage(`branch name ${branchName}`);
		console.log(`current branch name: ${branchName}`);

		let remoteName = repo.state.HEAD?.upstream?.remote;
		// vscode.window.showInformationMessage(`branch name ${branchName}`);
		console.log(`current remote name: ${remoteName}`);

		if (!remoteName) {
			vscode.window.showErrorMessage("此分支不存在远程分支，请检查！");
			return;
		}
		let refn = String(`${remoteName}/${branchName}`);
		let ref = repo.state.refs.find((ref) => {
			console.log(ref.name);
			return ref.name === refn;
		}
		);
		if (!ref) {
			vscode.window.showErrorMessage("未发现针对此分支的远程分支，请使用 git fetch 抓取后重试！");
			return;
		}

		// vscode.window.showInputBox(vscode.input)

		// const quickPick = vscode.window.createQuickPick();
		// quickPick.placeholder = 'Select (or create) HEAD:refs/for/<branch>';
		// quickPick.canSelectMany = false;
		// quickPick.items = codes.map((label: any) => ({ label }));
		// quickPick.onDidAccept(async () => {
		// 	const selection = quickPick.activeItems[0];
		// 	resolve(selection.label);
		// 	gitAPI("push", selection.label, id);
		// 	quickPick.hide();
		// });
		// quickPick.onDidChangeValue(() => {
		// 	// add a new code to the pick list as the first item
		// 	if (!codes.includes(quickPick.value)) {
		// 		const newItems = [quickPick.value, ...codes].map(label => ({ label }));
		// 		quickPick.items = newItems;
		// 	}
		// });
		// quickPick.onDidHide(() => quickPick.dispose());
		// quickPick.show();
		pushCommit(repo, remoteName, branchName as string);
	} catch (error) {
		vscode.window.showErrorMessage("Maybe There is No remote now!");
	}

	// try {
	// 	console.log(
	// 		await selectedRepository.getConfig("remote")
	// 	);
	// 	let remoteName = await selectedRepository.getConfig("branch.$(git rev-parse --abbrev-ref HEAD).remote");
	// 	let mergeref = await selectedRepository.getConfig("$(git config branch.$(git rev-parse --abbrev-ref HEAD).merge)");
	// 	console.log(remoteName);
	// 	console.log(mergeref);
	// } catch (error) {
	// 	vscode.window.showErrorMessage("Maybe There is No remote now!");
	// }
}


// 点击按钮推送到选择的分支到到远程 gerrit 分支
async function selectingPush(uri: any) {
	const repoRaw = await gitAPI("repos");
	const reposName: any = [];
	repoRaw.forEach((value: any, index: number) => {
		const rName = path.basename(value._repository.root);
		const rDesc = [value._repository.headLabel, value._repository.syncLabel]
			.filter(l => !!l)
			.join(' ');
		reposName.push({ id: index, label: rName, description: rDesc });
	});
	const repoId: any = await showRepoQuickPick(reposName);

	const branchRaw = await gitAPI("branch", "", repoId['id']);
	const branchsName: string[] = [];
	branchRaw.forEach(function (value: any) {
		branchsName.push(value['name']);
	});
	showBranchQuickPick(branchsName, repoId['id']);
}

// 根据val 参数获取 git的相关操作, 获取 仓库，分支，和推送
async function gitAPI(val: string, pushBranch: string = "", id: number = 0, remoteName: string = "origin") {
	const gitExtension = vscode.extensions.getExtension('vscode.git');
	const git = gitExtension?.exports;
	const api = git.getAPI(1);
	// 获取仓库
	if (val === "repos") {
		const repo = api.repositories;
		console.log(repo);
		return repo;
	}

	// 获取分支
	else if (val === "branch") {
		const repo = api.repositories[id];
		const branch = await repo.getBranches(remoteName);
		return branch;

	}

	// 推送
	else if (val === "push") {
		const repo = api.repositories[id];
		pushCommit(repo, remoteName, pushBranch);
		return;
	}
}

async function showRepoQuickPick(val: any) {
	const result = await vscode.window.showQuickPick(val, {
		placeHolder: 'Select your workdir',
	});
	return result;
}

function showBranchQuickPick(codes: any, id: any) {
	return new Promise((resolve) => {
		const quickPick = vscode.window.createQuickPick();
		quickPick.placeholder = 'Select (or create) HEAD:refs/for/<branch>';
		quickPick.canSelectMany = false;
		quickPick.items = codes.map((label: any) => ({ label }));
		quickPick.onDidAccept(async () => {
			const selection = quickPick.activeItems[0];
			resolve(selection.label);
			quickPick.hide();
			gitAPI("push", selection.label, id);
		});
		quickPick.onDidChangeValue(() => {
			// add a new code to the pick list as the first item
			if (!codes.includes(quickPick.value)) {
				const newItems = [quickPick.value, ...codes].map(label => ({ label }));
				quickPick.items = newItems;
			}
		});
		quickPick.onDidHide(() => quickPick.dispose());
		quickPick.show();
	});
}


//* this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "GerritHelper" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	// let disposable = vscode.commands.registerCommand('Gerrit.Helper.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from GerritHelper!');
	// });

	// 点击处理
	// 1. 支持acommit，支持Quick Input
	// 2. 支持pushg
	// 3. 批量 hook
	// 4. 批量分支切换
	// 5. 进行 sync(git pull --force)

	let disposable = vscode.commands.registerCommand('Gerrit.Helper.pushg', mainPushG);

	context.subscriptions.push(disposable);

	/* //* 切换pannel的快捷方式
	const sidePanel = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Right,
		-200
	);

	sidePanel.command = "workbench.action.toggleAuxiliaryBar";
	sidePanel.text = `$(chevron-right)`;
	sidePanel.tooltip = "Toggle Side panel";
	sidePanel.show(); */

}


// 获取当前的git插件
function getGitExtension() {
	const vscodeGit = vscode.extensions.getExtension<GitExtension>('vscode.git');
	const gitExtension = vscodeGit && vscodeGit.exports;
	if (gitExtension) {
		return gitExtension.getAPI(1);
	}
	return;
}

// this method is called when your extension is deactivated
export function deactivate() { }
