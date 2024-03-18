const Counter = (props) => {
    return (
        <p>Out of {props.total} flips, 
        there have been {props.heads} heads 
        and {props.tails} tails.</p>
    );
};

export default Counter;