import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const gilroy = localFont({
    src: './fonts/Gilroy-Bold.woff2',
    variable: '--font-gilroy',
})

const playfair = localFont({
    src: './fonts/PlayfairDisplay-Bold.woff2',
    variable: '--font-playfair',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

const avenir = localFont({
    src: './fonts/AvenirNext-Bold.woff2',
    variable: '--font-avenir',
})