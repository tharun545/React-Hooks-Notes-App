// Write your code here
// import {
//   MainContainer,
//   NoteTitle,
//   NoteContent,
//   Image,
//   Div,
// } from './styledComponents'

import './index.css'

const NoteItem = props => {
  const {notesDetails} = props
  const {title, notes} = notesDetails

  return (
    // <MainContainer>
    //   {newNote.length <= 0 ? (
    //     <div>
    //       <Image
    //         src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
    //         alt="notes empty"
    //       />
    //       <h1>No Notes Yet</h1>
    //       <p>Notes you add will appear here</p>
    //     </div>
    //   ) : (
    //     <Div>
    //       <NoteTitle>{title}</NoteTitle>
    //       <NoteContent>{notes}</NoteContent>
    //     </Div>
    //   )}
    // </MainContainer>
    <li className="list-item">
      <h1 className="title">{title}</h1>
      <p className="note">{notes}</p>
    </li>
  )
}

export default NoteItem
