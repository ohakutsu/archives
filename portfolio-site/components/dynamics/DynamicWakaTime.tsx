import dynamic, { LoaderComponent } from 'next/dynamic'

const DynamicWakaTime = dynamic(
  (): LoaderComponent =>
    import('~/components/organisms/WakaTime').then((mod) => mod.WakaTime)
)

export default DynamicWakaTime
