const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// Register command for semicolon
	let semicolonDisposable = vscode.commands.registerCommand('extension.insertSemicolonAtTheEnd', function () {
		vscode.commands.executeCommand('cursorMove', {
			to: 'wrappedLineEnd'
		}).then(function () {
			vscode.commands.executeCommand('type', {
				text: ';'
			});
		});
	});

	// Register command for comma
	let commaDisposable = vscode.commands.registerCommand('extension.insertCommaAtTheEnd', function () {
		vscode.commands.executeCommand('cursorMove', {
			to: 'wrappedLineEnd'
		}).then(function () {
			vscode.commands.executeCommand('type', {
				text: ','
			});
		});
	});


	context.subscriptions.push(semicolonDisposable, commaDisposable);
}
exports.activate = activate;

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
