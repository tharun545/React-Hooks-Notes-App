// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`
export const NoteItemContainer = styled.form`
  box-shadow: 5px 10px 5px 10px #d8d8d8;
  height: 225px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 5px;
  width: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
`
export const MainHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-weight: 500;
`
export const TitlePara = styled.input`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  border: 0;
  margin-bottom: 15px;
  outline: none;
`
export const NotesPara = styled.textarea`
  color: #334155;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  outline: none;
  border: 0;
`
export const NoteCard = styled.ul`
  border-radius: 10px;
  padding: 10px;
  height: fit-content;
  width: fit-content;
  margin-right: 10px;
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  border-radius: 5px;
  width: 70px;
  height: 40px;
  border: 0;
  margin-top: 20px;
  cursor: pointer;
`
