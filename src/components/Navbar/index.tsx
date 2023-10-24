import { useMemo } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

export default function Layout() {
  const menuItems = useMemo(
    () => [
      {
        path: '/about',
        title: 'About',
      },
      {
        path: '/profile',
        title: 'Profiles',
      },
      {
        path: '/contact',
        title: 'Contact',
      },
    ],
    [],
  )

  const renderMenuItems = () => {
    return menuItems.map((item) => {
      const { title, path } = item
      return (
        <div key={title} className={cx('menuItem')}>
          <NavLink to={path}>{title}</NavLink>
        </div>
      )
    })
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <NavLink to={'/'}>Austin Ban</NavLink>
      </div>
      <div className={cx('menu')}>{renderMenuItems()}</div>
    </div>
  )
}
