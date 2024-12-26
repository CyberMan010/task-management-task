import { UserConsumer } from "../../context/myContext";

function InputCustom () {
    return(
        <UserConsumer>
            {username => {
                    return <div>
                        Hello {username}
                    </div>

                }
            }
        </UserConsumer>



    )
}
export default InputCustom;