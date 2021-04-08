class TimeoutError extends Error {}
class OfflineError extends Error {}
//exception 보다는 위처럼 error state를 활용해야 보다 명확한 정의 가능함! 
class NetworkClient {
    tryConnect():void {
        throw new Error('no netwokr');
    }
}

class UserService {
    constructor(private client: NetworkClient ){}

    login() {
        this.client.tryConnect();
    }
}
class App {
    constructor(private userService : UserService) {}
    run() {
        try{
            this.userService.login();
        } catch(error){
            //show dialog to User
            //if (error instanceof OfflineError) { } -> 타입 사라져서 이용 불가
        }
        
    };
}

const client = new NetworkClient();
const service = new UserService(client); 
const app = new App(service);
app.run();