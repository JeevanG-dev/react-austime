function CurrentTime()

{
    
let time = new Date()
    return <p class="font-monospace">This is the current date:{time.toLocaleDateString()} time:{time.toLocaleTimeString()}</p>
}

export default CurrentTime;