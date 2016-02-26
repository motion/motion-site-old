import { routes } from '../constants'

export const BannerTransition = () => $(
  <Banner>
    Using React? Motion can run your stack. <Link to={routes.transition}>Check out our docs to see how</Link>.
  </Banner>
)

export const Banner = () => $(
  <banner yield />.

  {
    root: {
      position: 'relative',
      zIndex: 1000,
      maxWidth: 800,
      width: '100%',
      margin: [70, 'auto', -60],
      padding: [10, 20],
      background: 'rgb(255, 255, 249)',
      border: '1px solid rgb(227, 227, 202)',
      color: 'rgba(0,0,0,0.6)',
      borderRadius: 5,
      flexFlow: 'row'
    }
  }
)
