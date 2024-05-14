import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './style.css'

function Item({item}) {
  const [isExpand, setIsExpand] = useState(false)

  return (
    <section className="indent">
      <div className="name-tab" onClick={() => setIsExpand(!isExpand)}>
        <span>
          {'-'.repeat(2)} {item.name}
        </span>
        {item.children && item.children.length > 0 && (
          <span className={` ${isExpand ? 'close' : 'open'} expand`}>
            {' '}
            {isExpand ? '-' : '+'}{' '}
          </span>
        )}
      </div>

      <div>
        {item.children && item.children.length > 0 && isExpand && (
          <section>
            {item.children.map((item) => (
              <Item item={item} />
            ))}
          </section>
        )}
      </div>
    </section>
  )
}

const FolderStructure = ({items}) => {
  return (
    <main>
      <h1>Folder Structure</h1>
      <section>
        {items.map((item, i) => (
          <div key={item + '#' + i}>
            <Item item={item} />
          </div>
        ))}
      </section>
    </main>
  )
}

document.body.innerHTML = "<div id='root'> </div>"

const rootElement = document.getElementById('root')
const items = [
  {
    name: 'node_modules',
    children: [],
  },
  {
    name: 'public',
    children: [
      {
        name: 'assets',
      },
      {
        name: 'fonts',
      },
    ],
  },
  {
    name: 'src',
    children: [
      {
        name: 'components',
        children: [
          {
            name: 'shared',
          },
          {
            name: 'fonts',
          },
        ],
      },
      {
        name: 'styles',
      },
    ],
  },
  {
    name: 'vite.config.ts',
  },
  {
    name: 'package.json',
  },
]

document.body.innerHTML = "<div id='root'></div>"
ReactDOM.render(
  <FolderStructure items={items} />,
  document.getElementById('root'),
)
