import dynamic, { LoaderComponent } from 'next/dynamic'

const DynamicGoogleSlide = dynamic(
  (): LoaderComponent =>
    import('~/components/organisms/GoogleSlide').then((mod) => mod.GoogleSlide)
)

export default DynamicGoogleSlide
