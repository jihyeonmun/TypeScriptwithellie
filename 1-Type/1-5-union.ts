{
/**
 * Union Types: OR
 */
    //원하는 케이스만 허용 시키고 싶을떄 UNION 쓰게 된다.
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction : Direction ) {
        console.log(direction);
    }
    move('down');

    type TileSize = 8 |16 | 32;
    const tile : TileSize = 16;

    //function : login -> sucess, fail 
    type SuccessState = {
        response: {
            body : string;
        };
    };
    type FailState = {
        reason : string;
    };
    function login() : SuccessState | FailState {
        return {
            response : {
                body : 'logged in!',
            },
        };
    }

    // printLoginState(state)
    //success -> Success Body
    // fail -> Fail Reason
    type LoginState = SuccessState | FailState;
    function printLoginState (state: LoginState):void {
        if('response' in state) {
            console.log('success!! ${state.response.body} ');
        } else{
            console.log('Fail!! ${state.reason} ');
        }
    }


}