

export const Footer = ()=> {
    return (
        <footer>
            <a href="https://en.wikipedia.org/wiki/Yoda">
            <img className="footerImg" alt="yoda face" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqswQD_cN80KCAF8u2AC7wtFTm-_FRRKzf9noD35LKAx77NLgZ4gmIXAMfxXGHuyKZIVA&usqp=CAU">
            </img></a>
            <div>
            <q className="quote">DO OR DO NOT <br></br> THERE IS NO TRY</q>
            <br></br> 
            <a href="https://en.wikipedia.org/wiki/Yoda">
            <p className="quote" style={{fontSize:'14px',textDecoration:'underline'}}>Yoda</p>
            </a>
            </div>
        </footer>
    )
}