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
  let spacing = (100 - (10 + 5.65 * (totalWeeks + 1))) / (totalWeeks + 3)
  console.log(spacing)
  return (
    <div>
      <div style={{ height: `${spacing}vh` }}></div>
      {weeks.map((week) => (
        <div key={week.id}>
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
          <div
            style={{
              height: `${spacing}vh`,
            }}
          ></div>
        </div>
      ))}
    </div>
  )
}
