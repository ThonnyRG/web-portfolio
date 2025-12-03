"use client";

import { Center, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import Image, { type StaticImageData } from 'next/image';
import { useLayoutEffect } from 'react';

import GithubIcon from '@/public/icons/Github.svg';

/** Github cannot be iframe'd */
export function Github() {
	useLayoutEffect(() => {
		window.open(
			'https://github.com/ThonnyRG',
			'_blank'
		);
	}, []);

	return (
		<Center flexDirection="column" h="full" p={4}>
			<LinkBox>
				<LinkOverlay
					href="https://github.com/ThonnyRG"
					target="_blank"
				>
					<Image
						alt="github"
						quality={100}
						src={GithubIcon as StaticImageData}
					/>
					<Text textAlign="center">Go to Github Profile</Text>
				</LinkOverlay>
			</LinkBox>
		</Center>
	);
}
