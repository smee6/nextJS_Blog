import Button from '@mui/material/Button';
import styles from '/styles/Home.module.css'
import Link from 'next/link';
import url from '../utility/url';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from '@mui/material/ButtonGroup';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import React, { useEffect } from "react";

export default function Header() {

    const theme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: grey[100],
            },
        },
    });
    return (
        <>
            <title>서명인 개발 블로그</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            {/**
             * PC일 경우에만 메뉴를 보여준다.
             *  */ }
            <div className={styles.hideMenu}>
                <ThemeProvider theme={theme}>
                    {url.map((e) => (
                        <Link href={e.link} key={e.title}>
                            <Button size="large">{e.title}</Button>
                        </Link>
                    ))}
                    {/* <Button size="large">
                        {theme.palette.type === "light" ? " ☼ " : " ☾ "}
                    </Button> */}
                </ThemeProvider>
            </div>
            {/**
             * 모바일에서는 메뉴를 가리고 
             * 반응형으로 아코디언 버튼 출현
             *  */ }
            <div className={styles.showMenu}>
                <a>
                    <Accordion TransitionProps={{ unmountOnExit: true }}
                    >
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{
                                border: 'none',
                                boxShadow: 'none',
                                backgroundColor: "black",
                                '&:hover': {
                                    backgroundColor: 'black',
                                },
                            }}
                        >
                            <FontAwesomeIcon icon={faBars} size="2x" color="white" />
                        </AccordionSummary>
                        <AccordionDetails>
                            <ButtonGroup
                                orientation="vertical"
                                aria-label="vertical contained button group"
                                variant=""
                                fullWidth={true}
                            >
                                {url.map((e) => (
                                    <Link href={e.link} key={e.title}>
                                        <Button size="large">{e.title}</Button>
                                    </Link>
                                ))}
                            </ButtonGroup>
                        </AccordionDetails>
                    </Accordion>
                </a>
            </div>
        </>
    );
}
