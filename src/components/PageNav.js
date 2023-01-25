import React from 'react'

export default function PageNav() {
  const currWeek = 6
  const previousWeek = Math.max(
    0,
    parseInt(window.location.pathname.split('/')[1]) - 1
  ).toString()
  const nextWeek = Math.min(
    currWeek - 1,
    parseInt(window.location.pathname.split('/')[1]) + 1
  ).toString()
  const weeks = Array.from(Array(currWeek).keys())

  return (
    <div className='pageNav'>
      {window.location.pathname.split('/')[1] ? (
        <nav
          aria-label='Page navigation example'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ul className='pagination'>
            {parseInt(window.location.pathname.split('/')[1]) === 0 ? null : (
              <li className='page-item'>
                <a className='page-link' href={previousWeek}>
                  Previous
                </a>
              </li>
            )}
            {weeks.map((week, index) =>
              index === parseInt(window.location.pathname.split('/')[1]) ? (
                <li
                  className='page-item'
                  key={index}
                  style={{ backgroundColor: 'lightgrey' }}
                >
                  <a
                    className='page-link'
                    href='#'
                    style={{ color: 'black', backgroundColor: 'lightgrey' }}
                  >
                    {index}
                  </a>
                </li>
              ) : (
                <li className='page-item' key={index}>
                  <a className='page-link' href={index.toString()}>
                    {index}
                  </a>
                </li>
              )
            )}
            {parseInt(window.location.pathname.split('/')[1]) ===
            currWeek - 1 ? null : (
              <li className='page-item'>
                <a className='page-link' href={nextWeek}>
                  Next
                </a>
              </li>
            )}
          </ul>
        </nav>
      ) : null}
    </div>
  )
}
