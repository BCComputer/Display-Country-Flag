function App() {
    const inputRef = useRef(null);
    const [open, setOpoen] = useState(false);
   
    const handleSideBar = () => {
      console.log(!open);
      setOpoen(!open);
    };
   
    useEffect(() => {
      if (open) {
        inputRef.current.style.display = "flex";
      } else {
        inputRef.current.style.display = "none";
      }
    }, [open]);
   
    return (
      <>
        {/* <div ref={inputRef} style={{width:"100px", height:'100px', background:"blue", marginLeft:"10px"}}> </div>
        <button onClick={handleRight}>
          Move right
        </button>
        <button onClick={handleLeft}>
          Move left
        </button> */}
   
        <div
          style={{
            display: "flex"
          }}
        >
          <SideBar inputRef={inputRef} handleSideBar={handleSideBar}/>
   
          <button onClick={handleSideBar}>toggle</button>
        </div>
      </>
    );
  }
   
  export default App;