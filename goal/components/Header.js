export default function Header() {
    return (
        <div className='headerContainer'>
            <img className='profileImg' src='/SleepingBeauty.jpg' />
            <h1 className='titleText'>React Bootcamp</h1>
            <div className="navigationContainer">
                <a className='navigationLink' href='/'>Tasks</a>
                <a className='navigationLink'>Weather</a>
            </div>
            <style jsx>
                {`
                    .headerContainer {
                        background-color: grey;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        padding-right: 20px;
                        padding-left: 20px;
                        color: white;
                        width: 100%;
                        height: 150px;

                    }

                    .profileImg {
                        width: 120px;
                        height: 120px;
                        object-fit: cover;
                        border-radius: 50%;
                    }

                    .titleText {
                        padding-left: 20px;
                    }

                    .navigationContainer {
                        //background-color: yellow;
                        display: flex;
                        flex-direction: row;
                        margin-left: auto;
                    }

                    .navigationLink {
                        margin: 5px;
                    }
                `}
            </style>
        </div>
    )
}