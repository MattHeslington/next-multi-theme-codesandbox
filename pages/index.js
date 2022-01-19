import ThemeButton from 'components/theme-button'

export default function Home() {

    function handleOne() {
        var target = document.getElementsByTagName("html")[0]
        target.classList.toggle('varOne')
    }

    return (
        <div className='w-screen h-screen bg-white dark:bg-black'>
            <ThemeButton size="6"/>
            <div className='font-bold text-black dark:text-white'>home</div>
            <div className='flex flex-row'>
                <button onClick={handleOne} className='h-12 px-4 text-black border border-gray-500 dark:text-white varOne:text-red-500 dark:varOne:text-blue-600'>variant 1</button>
            </div>
        </div>
    )
}
