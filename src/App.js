import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import dayjs from 'dayjs'

function App() {
  const [startDate, setStartDate] = useState(new Date())
  const [value, setValue] = useState(dayjs('2023-05-17T12:00'))
  const [form, setForm] = useState({
    tower: '',
    floor: '',
    room: '',
    date: '',
    time: '',
    comment: '',
  })
  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const clearForm = (e) => {
    e.preventDefault()
    setForm({
      tower: '',
      floor: '',
      room: '',
      date: '',
      time: '',
      comment: '',
    })
  }
  const sendForm = (e) => {
    e.preventDefault()
    console.log(JSON.stringify({ ...form, date: startDate, time: value }))
    setForm({
      tower: '',
      floor: '',
      room: '',
      date: '',
      time: '',
      comment: '',
    })
  }
  console.log(form)
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <h1>Бронирование переговорной</h1>
          <form action="">
            <select onChange={updateForm} name="tower" id="">
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
            <select onChange={updateForm} name="floor" id="">
              <option name="floor" value="3">
                3
              </option>
              <option name="floor" value="4">
                4
              </option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
            </select>
            <select onChange={updateForm} name="room" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            >
              {' '}
            </DatePicker>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                value={value}
                onChange={(newTime) => setValue(newTime)}
                label="Выберите время"
              />
            </LocalizationProvider>
            <span>Комментарий:</span>
            <textarea
              onChange={updateForm}
              name="comment"
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <button className="clear" onClick={clearForm}>
              Очистить форму
            </button>
            <button className="submit" onClick={sendForm} type="sumbit">
              Отправить форму
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
