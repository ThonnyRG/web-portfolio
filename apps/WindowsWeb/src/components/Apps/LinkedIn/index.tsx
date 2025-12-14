"use client";
import { Center, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import Image, { type StaticImageData } from 'next/image';
import { useLayoutEffect } from 'react';

import LinkedinIcon from '@/public/icons/LinkedIn.png';

export function LinkedIn() {
    useLayoutEffect(() => {
        window.open(
            'https://www.linkedin.com/in/jamc17/',
            '_blank'
        );
    }, []);

    return (
        <Center flexDirection="column" h="full" p={4}>
            <LinkBox>
                <LinkOverlay
                    href='https://www.linkedin.com/in/jamc17/'
                    target='_blank'
                >
                    <Image
                        alt="LinkedIn"
                        quality={100}
                        src={LinkedinIcon as StaticImageData}
                    />
                    <Text textAlign="center">Go to my LinkedIn profile</Text>
                </LinkOverlay>
            </LinkBox>
        </Center >
    );

}

