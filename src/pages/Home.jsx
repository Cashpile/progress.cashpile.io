import { Link } from 'react-router-dom'

export default function Home() {
  const numberOfWeeks = 2
  const weeks = []
  for (let i = 0; i < numberOfWeeks + 1; i++) {
    weeks.push({
      id: i,
      title: `Weekly Update #${i}`,
      link: `/${i}`,
    })
  }

  return (
    <div>
      <div style={{ height: '5vh' }}></div>
      {weeks.map((week) => (
        <div key={week.id}>
          <div style={{ height: '5vh' }}></div>
          <p className='week'>
            <Link to={week.link}>{week.title}</Link>
          </p>
        </div>
      ))}
    </div>
  )
}
