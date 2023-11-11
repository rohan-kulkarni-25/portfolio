import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center  justify-center  gap-24 p-24">
      <div className="max-w-5xl w-full flex justify-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by visiting&nbsp;
          <a className="font-mono font-bold" href='https://links.rohankulkarni.dev' target='_blank'>links.rohankulkarni.dev</a>
        </p>
      </div>

      <div className="relative font-mono flex place-items-center">
        <p className='text-black '>will be live soon...</p>
      </div>
    </main>
  )
}
