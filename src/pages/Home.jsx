import { Link } from 'react-router-dom'
import numWords from 'num-words'
import capitalize from 'capitalize'

export default function Home() {
  const currWeek = 3
  const totalWeeks = 6
  const weeks = []
  for (let i = 0; i < totalWeeks; i++) {
    weeks.push({
      id: i,
      title: `Week ${capitalize(numWords(i))}`,
    })
  }

  return (
    <div>
      {weeks.map((week) => (
        <div key={week.id}>
          <div style={{ height: '5vh' }}></div>
          <h2 className='week'>
            {week.id < currWeek ? (
              <button id='shadow'>
                <Link id={'week-' + week.id} to={'/' + week.id}>
                  {week.title}
                </Link>{' '}
              </button>
            ) : (
              <button id='shadow' style={{ backgroundColor: 'lightGrey' }}>
                <Link id={'week-' + week.id} to='/'>
                  {week.title}
                </Link>{' '}
              </button>
            )}
          </h2>
        </div>
      ))}
    </div>
  )
}
