
import { chakra } from '@chakra-ui/react';

export function VSCode() {
	return (
		<chakra.iframe
			border="none"
			height="100%"
			src="https://vscode.dev"
			title="VSCode"
			width="100%"
		/>
	);
}
