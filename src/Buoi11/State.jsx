import React, { useState } from 'react'

function Buoi11() {
    // Tạo ra state
    const [message, setMessage] = useState("Hook State");
    const handleSetMessage = () => {
        const value = prompt("Input your message");
        setMessage(value);
    }

    const [count, setCount] = useState(0);

    // State là arr
    const [colors, setColors] = useState(["Black", "White", "Blue"])
    const handleAddColor = () => {
        const color = prompt("Input your color");
        // Cách viết 1: Bất Đồng Bộ của state. Do quy trình thay đổi state là bất đồng bộ
        setColors([...colors, color]);

        // Cách viết 2: Callblack chạy xong, mới chạy callback thứ 2
        setColors((colors) => [...colors, color]);
    }
    const handleRemoveColor = () => {
        const color = prompt("Input your color");
        const newColors = colors.filter((item) => item !== color);
        setColors(newColors);
    }

    // State là object
    const [form, setForm] = useState({ username: "Test", email: "Test" });
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Buổi 11-Hook-State</h1>
            <p>Câu 1: Gọi hàm useState gán về mảng có 2 giá trị</p>
            <p>Masseage: {message}</p>
            <button className='btn btn-primary' onClick={handleSetMessage}>Set Massage</button>
            <br />
            <p>Number: {count}</p>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Count + 1</button>
            <br />
            <br />
            <p>Câu 2: State là mảng(array)</p>
            <p>Colors: {colors.join(", ")}</p>
            <button className='btn btn-primary' onClick={handleAddColor}>Add Color</button>
            <button className='btn btn-danger' onClick={handleRemoveColor}>Remove Color</button>
            <p>Chú Ý: Có 2 cách viết setState: Cách 1 bị bất đồng bộ, Cách 2 xử lý bất đồng bộ(dùng callback function)</p>
            <br />
            <br />
            <p>Câu 3: State là object</p>
            <p>User Name: {form.username} - Email: {form.email}</p>
            <form >
                <label htmlFor="">User Form</label>
                <input type="text"
                    placeholder='Username'
                    name='username'
                    // value={form.username}
                    onChange={handleChangeForm} />
                <input type="email"
                    placeholder='email'
                    name='email'
                    // value={form.email}
                    onChange={handleChangeForm} />
                <button type="submit" className='btn btn-success'>Submit </button>
            </form>
        </div>
    )
}

export default Buoi11;