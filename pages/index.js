import Head from 'next/head'
import ThemeButton from 'components/theme-button'

export default function Home() {

    function handleOne() {
        var target = document.getElementsByTagName("html")[0]
        target.classList.toggle('varOne')

    }

    return (
        <div className='w-screen h-screen bg-white dark:bg-black'>
            <ThemeButton size="6"/>
            <div className='font-bold text-black dark:text-white'>begin</div>
            <div className='flex flex-row items-center justify-start space-x-4 font-bold text-black dark:text-white varOne:text-red-500 dark:varOne:text-pink-500 varOne:dark:text-pink-500'>
                <button onClick={handleOne}>variant 1</button>
            </div>
        </div>
    )
}
