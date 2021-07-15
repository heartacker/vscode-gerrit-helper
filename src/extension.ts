// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { cwd } from 'process';
import * as vscode from 'vscode';
import { API } from "./api/git";
import { Git, GitExtension, Repository } from "./api/git";

declare let outp: vscode.OutputChannel;

//push 相关的处理
async function mainGerritPush(url: any) {

	// check git extension is installed
	const cgit = getGitExtension();
	if (!cgit) {
		console.log("can not identify the special git repo");
		// goto manually selection
	}

	const gitExtension = vscode.extensions.getExtension('vscode.git');
	const git = gitExtension?.exports;
	const api = git.getAPI(1);
	return pushg(api, url);
}


// 点击按钮推送到当前分支到远程 gerrit 分支
// Gerrit.Helper.pushg
async function pushg(git: API, uri: any) {
	console.log(uri);
	if (uri) {
		let selectedRepository = git.repositories.find(
			(repository) => {
				return repository.rootUri.path === uri._rootUri.path;
			});
		if (selectedRepository) {
			try {
				let branchName = (selectedRepository as Repository).state.HEAD?.name;
				// vscode.window.showInformationMessage(`branch name ${branchName}`);
				outp.appendLine(`branch name ${branchName}`);


				let remoteName = selectedRepository.state.remotes[0].name;
				outp.appendLine(`remote name ${remoteName}`);

				selectedRepository.state.refs.forEach(ref => {
					outp.appendLine(`ref now is ${ref.name},remote ${ref.remote},${ref.type}`);
				});

				selectedRepository.state.remotes.forEach(rmt => {
					outp.appendLine(`ref now is ${rmt.name},remote ${rmt.fetchUrl},${rmt.pushUrl}`);
				});

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
			vscode.window.showInformationMessage("test done");
		}
	} else {
		vscode.window.showWarningMessage("请在Git 管理仓库发起 git pushg");
	}

}


// 点击按钮推送到当前分支到远程 gerrit 分支
// Gerrit.Helper.pushg
async function push(repo: any) {

}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	outp = vscode.window.createOutputChannel("Gerrit Helper");

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
	// 5. 进行 sync（git pull --force）
	let disposable = vscode.commands.registerCommand('Gerrit.Helper.push', mainGerritPush);
	let disposable2 = vscode.commands.registerCommand('Gerrit.Helper.pushg', mainGerritPush);

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

// 在git的输入栏添加前置消息
function prefixCommit(repository: Repository, prefix: String) {
	repository.inputBox.value = `${prefix}${repository.inputBox.value}`;
}

// 获取当前的git的仓库
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
