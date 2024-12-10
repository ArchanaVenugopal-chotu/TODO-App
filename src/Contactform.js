import { useState } from 'react';
import './Contactform.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        interest: "",
        todo: "",
    });
    const [SubmitData, Setsubmitdata] = useState([]);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError(""); // Clear errors on input change
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        const { name, interest, todo } = formData;

        // Simple validation
        if (!name || !interest || !todo) {
            setError("All fields are required!");
            return;
        }

        Setsubmitdata((prev) => [
            ...prev,
            { ...formData }
        ]);
        setFormData({ name: "", interest: "", todo: "" });
    };

    return (
        <div className="container">
            <div className="contactform">
                <form onSubmit={handlesubmit}>
                    {error && <p className="error-message">{error}</p>}
                    <label htmlFor="name">NAME</label>
                    <input 
                        id="name"
                        className="input-field"
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        type="text" 
                        placeholder="Enter your name"
                    />
                    <label htmlFor="interest">Interest</label>
                    <input 
                        id="interest"
                        className="input-field"
                        name="interest" 
                        value={formData.interest} 
                        onChange={handleChange} 
                        type="text" 
                        placeholder="Enter your interest"
                    />
                    <label htmlFor="todo">Todo lists</label>
                    <input 
                        id="todo"
                        className="input-field"
                        name="todo" 
                        value={formData.todo} 
                        onChange={handleChange} 
                        type="text" 
                        placeholder="Enter your to-do list"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="submitted-data">
                <h3>Submitted Data:</h3>
                {SubmitData.length > 0 ? (
                    <ul>
                        {SubmitData.map((item, index) => (
                            <li key={index}>
                                <p>
                                    <strong>Name:</strong> {item.name}
                                </p>
                                <p>
                                    <strong>Interest:</strong> {item.interest}
                                </p>
                                <p>
                                    <strong>Todo:</strong> {item.todo}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No data submitted yet.</p>
                )}
            </div>
        </div>
    );
};

export default Contact;
