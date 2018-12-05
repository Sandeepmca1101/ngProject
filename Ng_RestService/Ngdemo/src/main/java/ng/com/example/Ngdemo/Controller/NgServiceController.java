package ng.com.example.Ngdemo.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class NgServiceController {
    @GetMapping("/hello")
	public String getHello(){
		return "Hello";
	}
    @GetMapping("/helloworld")
	public HelloWorld getHelloworld(){
		return new HelloWorld("RAJ","Hi ");
	}
}
