import { useRef, useState } from "react";
import Ticket from "../../components/Ticket";
import "../Index/Index.css";

export default function TicketPage() {
	const nameRef = useRef();
	const [name, setName] = useState("");
	const [error, setError] = useState(null);

	const generateTicket = () => {
		const name = nameRef.current.value.trim();
		if (!name) return setError("Name cannot be empty");
		if (name.length > 30) return setError("That name's a little too long to fit on the ticket...")
		setName(nameRef.current.value);
		setError(null);
	};

	return (
		<main>
			<section className="tickets">
				<h2 className="ticket-header">Get your ticket now</h2>
				<p>
					Share your ticket on social media and let everyone know you’re here!
				</p>
				<Ticket name={name} />
				<div className="ticket-placer-section">
					  <input type="text" placeholder="Enter your name" ref={nameRef} className={error && "error"} />
					  <div className="input-error">{error || ""}</div>
					<button onClick={generateTicket}>Grab it!</button>
				</div>
			</section>
		</main>
	);
}
