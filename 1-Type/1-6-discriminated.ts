{
    //function : login -> sucess, fail 
    type SuccessState = {
        result:'success';
        response: {
            body : string;
        };
    };
    type FailState = {
        result : 'fail';
        reason : string;
    };
    function login() : SuccessState | FailState {
        return {
            result : 'success',
            response : {
                body : 'logged in!',
            },
        };
    }

    // printLoginState(state)
    //success -> Success Body
    // fail -> Fail Reason
    type LoginState = SuccessState | FailState;
    function printLoginStae (state: LoginState):void {
        //state.result //success or fail
        if(state.result === 'success') {
            console.log('success!! ${state.response.body} ');
        } else{
            console.log('Fail!! ${state.reason} ');
        }
    }
}