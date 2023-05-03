// Write your code here

import {useState} from 'react'

import {v4} from 'uuid'

// import {
//   MainContainer,
//   NoteItemContainer,
//   MainHeading,
//   TitlePara,
//   NotesPara,
//   AddButton,
//   NoteCard,
// } from './styledComponents'

import NoteItem from '../NoteItem'

import './index.css'

const Notes = () => {
  const [noteList, setNoteList] = useState([])
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')

  const onClickAdd = e => {
    e.preventDefault()
    const newNote = {
      id: v4(),
      title,
      notes,
    }
    setNoteList(prevNoteList => [...prevNoteList, newNote])
    setTitle('')
    setNotes('')
  }

  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const onChangeNote = e => {
    setNotes(e.target.value)
  }

  return (
    // <MainContainer>
    //   <MainHeading>Notes</MainHeading>
    //   <NoteItemContainer>
    //     <TitlePara placeholder="Title" value={title} onChange={onChangeTitle} />
    //     <NotesPara
    //       placeholder="Take a Note..."
    //       cols="80"
    //       rows="5"
    //       onChange={onChangeNote}
    //       value={notes}
    //     >
    //       {}
    //     </NotesPara>
    //     <div style={{textAlign: 'right'}}>
    //       <AddButton type="submit" onClick={onClickAdd}>
    //         Add
    //       </AddButton>
    //     </div>
    //   </NoteItemContainer>
    //   <NoteCard>
    //     {noteList.map(each => (
    //       <li>
    //         <NoteItem key={each.id} newNote={each} />
    //       </li>
    //     ))}
    //   </NoteCard>
    // </MainContainer>
    <main>
      <div className="main-container">
        <h1 className="main-heading">Notes</h1>
        <form className="form-controller">
          <input
            type="text"
            value={title}
            placeholder="Title"
            className="input-title"
            onChange={onChangeTitle}
          />
          <textarea
            placeholder="Take a Note..."
            cols="80"
            rows="5"
            value={notes}
            className="note-text-area"
            onChange={onChangeNote}
          />
          <div style={{textAlign: 'right'}}>
            <button type="submit" className="add-button" onClick={onClickAdd}>
              Add
            </button>
          </div>
        </form>
        {noteList.length <= 0 ? (
          <div className="empty-note-display">
            <img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
              className="image"
            />
            <h1 className="para">No Notes Yet</h1>
            <p className="para">Notes you add will appear here</p>
          </div>
        ) : (
          <ul className="item-container">
            {noteList.map(each => (
              <NoteItem key={each.id} notesDetails={each} />
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}

export default Notes
