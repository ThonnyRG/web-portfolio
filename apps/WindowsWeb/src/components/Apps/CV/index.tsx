"use client";
import { Center, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { useLayoutEffect } from 'react';


export function CV() {
    useLayoutEffect(() => {
        window.open(
            'https://drive.google.com/file/d/1v73J3yeUMGYp6SvtrdVv9KgCqQuAL62Z/view?usp=sharing',
            '_blank'
        );
    }, []);

    return (
        <Center flexDirection="column" h="full" p={4}>
            <LinkBox>
                <LinkOverlay
                    href="https://drive.google.com/file/d/1v73J3yeUMGYp6SvtrdVv9KgCqQuAL62Z/view?usp=sharing"
                    target="_blank"
                >
                </LinkOverlay>
            </LinkBox>
        </Center>
    );
}