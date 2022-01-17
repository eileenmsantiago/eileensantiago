const space = [0, 4, 8, 16, 32, 64, 128, 256]
// space.small = space[1]
// space.medium = space[2]
// space.large = space[3]

const breakpoints = ['40em', '52em', '64em', '80em'];
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const fontSizes = {
    body: [12, 14, 17, 20],
    heading: [24, 32, 40, 48, 80],
};
fontSizes.default = fontSizes.body[2]

const grid = {
    defaults: {
    }
}

export const colors = {
    primary: "#F85927",
    secondary: "#FF92F4",
    accent: "#FBCA0A",
    black: "#2D2F34",
    white: "#FEFDFC",
    cream: "#F5F4EC",
    // gray: "#6C6D72",
    // grayMedium: "#CACACA",
    // grayLight: "#F3F2F1",
    grays: [
        "#f7f7f7",
        "#E5E7EB",
        "#D1D5DB",
        "#9CA3AF",
        "#6B7280",
        "#4B5563",
        "#374151",
        "#1F2937",
    ],
}

export const heading = {
    defaults: {
        variant: "h1"
    },
    variants: {
        h1: {
            mb: 5
        },
        h2: {
            mb: [3, 4]
        },
        h3: {
            mb: [3, 3, 3]
        },
        h4: {
            mb: [2, 2, 3]
        },
        bodyLg: {
            mb: 3
        },
        eyebrow: {
            mb: 3
        }
    }
};

export const text = {
    defaults: {
        variant: "body"
    }
};

export const paragraph = {
    defaults: {
        mb: 4,
        variant: "body",
        color: "grayDark"
    }
};

export const button = {
    defaults: {
        variant: "primary",
        size: 'md'
    },
    variants: {
        primary: {
            color: 'white',
            bg: 'primary',
        },
        secondary: {
            color: 'white',
            bg: 'black'
        },
        tertiary: {
            color: 'primary',
            bg: 'white'
        }
    },
    size: {
        sm: {
            py: '10px',
            px: '25px',
            borderRadius: '28px'
        },
        md: {
            py: '20px',
            px: '40px',
            borderRadius: '28px'
        }
    }
}

export const fonts = {
    andaleMono: {
        name: 'AndaleMono',
        src: [
            {
                type: "woff2",
                url: "/fonts/AndaleMono.woff2"
            },
            {
                type: "woff",
                url: "/fonts/AndaleMono.woff"
            },
            {
                type: "ttf",
                url: "/fonts/AndaleMono.ttf"
            }
        ]
    },
    oggRegular: {
        name: 'OggRegular',
        src: [
            {
                type: "woff2",
                url: "/fonts/Ogg-Regular.woff2"
            },
            {
                type: "woff",
                url: "/fonts/Ogg-Regular.woff"
            },
            {
                type: "ttf",
                url: "/fonts/Ogg-Regular.ttf"
            }
        ]
    },
    helveticaRegular: {
        name: 'HelveticaRegular',
        src: [
            {
                type: "woff2",
                url: "/fonts/HelveticaNeueLTPro-Regular.woff2"
            },
            {
                type: "woff",
                url: "/fonts/HelveticaNeueLTPro-Regular.woff"
            },
            {
                type: "ttf",
                url: "/fonts/HelveticaNeueLTPro-Regular.ttf"
            }
        ]
    }
}

const fontFamily = {
    helveticaRegular: fonts.helveticaRegular.name + ', Arial , Helvetica sans-serif',
    oggRegular: fonts.oggRegular.name + ' , Times, serif',
    andaleMono: fonts.andaleMono.name + ' , Times, serif'
};

fontFamily.default = fontFamily.helveticaRegular;

const typography = {
    h1: {
        fontFamily: fontFamily.oggRegular,
        fontSize: ['heading.4', 'heading.4', 'heading.5'],
        lineHeight: 1.1
    },
    h2: {
        fontFamily: fontFamily.oggRegular,
        fontSize: ['heading.2', 'heading.3', 'heading.3'],
        lineHeight: 1
    },
    h3: {
        fontFamily: fontFamily.oggRegular,
        fontSize: ['heading.2', 'heading.3', 'heading.3'],
        fontWeight: 500,
        lineHeight: 1.2
    },
    h4: {
        fontFamily: fontFamily.oggRegular,
        fontSize: ['heading.2', 'heading.2', 'heading.2'],
        fontWeight: 500,
        lineHeight: 1.2
    },
    bodySm: {
        fontSize: ['body.0'],
        lineHeight: 1
    },
    body: {
        fontSize: 'default',
        lineHeight: 1.5,
        letterSpacing: 0.3
    },
    bodyLg: {
        fontSize: ['body.2','body.3'],
        lineHeight: 1.3
    },
    eyebrow: {
        fontFamily: fontFamily.helveticaRegular,
        fontSize: ['body.0', 'body.1'],
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '0.1rem',
        color: "grayDark"
    },
    highlight: {
        fontFamily: fontFamily.andaleMono,
        fontSize: ['heading.1', 'heading.1', 'heading.2'],
        lineHeight: 1.3
    }
}

export default {
    space,
    fontFamily,
    breakpoints,
    fontSizes,
    colors,
    grid,
    button,
    container: {
        defaults: {
            py: [5, 5],
            px: [4, 4, 5],
            variant: "md"
        },
        variants: {
            xs: {
                maxWidth: 800
            },
            sm: {
                maxWidth: 980
            },
            md: {
                maxWidth: 1020
            },
            lg: {
                maxWidth: 1280
            }
        }
    },
    text: {
        defaults: {
            variant: "body"
        }
    },
    paragraph: {
        defaults: {
            mb: 3,
            variant: "body"
        }
    },
    text,
    paragraph,
    heading,
    typography
}
