import TaskProvider from '@/context/task/TaskProvider'

function MyApp({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Component {...pageProps} />
    </TaskProvider>
  )
}

export default MyApp
