package ng.com.example.Ngdemo.Controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos=new ArrayList();
    private static int idCounter=0;
    
	static {
		todos.add(new Todo(++idCounter,"TODOS CLASS","Dance",new Date(),false));
		todos.add(new Todo(++idCounter,"TODOS CLASS","Angular",new Date(),false));
		todos.add(new Todo(++idCounter,"TODOS CLASS","MS",new Date(),false));
		todos.add(new Todo(++idCounter,"TODOS CLASS","DB",new Date(),false));
		todos.add(new Todo(++idCounter,"TODOS CLASS","DS",new Date(),false));
		
	}
	public List<Todo> findAll(){
		return todos;
	}
}