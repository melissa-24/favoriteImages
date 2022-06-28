package com.beedevservices.favoriteimages.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.beedevservices.favoriteimages.models.LoginUser;
import com.beedevservices.favoriteimages.models.User;
import com.beedevservices.favoriteimages.services.FavoriteService;
import com.beedevservices.favoriteimages.services.UserService;



@Controller
public class MainController {
//	@GetMapping("/")
//	public String tempIndex() {
//		return "TEMP.jsp";
//	}
	
	@Autowired
	private UserService userService;
	@Autowired
	private FavoriteService favoriteService;
	
//	User
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newUser", new User());
	    model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}
	@PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser, 
            BindingResult result, Model model, HttpSession session) {
  
        User user = userService.register(newUser, result);
           
        if(result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "index.jsp";
        }
        
        session.setAttribute("userId", user.getId());   
    
        return "redirect:/dashboard";
    }
    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
            BindingResult result, Model model, HttpSession session) {
        User user = userService.login(newLogin, result);
    
        if(result.hasErrors() || user == null) {
            model.addAttribute("newUser", new User());
            return "index.jsp";
        }   
        session.setAttribute("userId", user.getId());
    
        return "redirect:/dashboard";
    }
    @GetMapping("/logout")
    public String logout(HttpSession session) {
    	session.invalidate();
    	
    	return "redirect:/";
    }
    
//    Favorite
	@GetMapping("/dashboard")
	public String welcome(HttpSession session, Model model) {
	 
		if(session.getAttribute("userId") == null) {
			return "redirect:/logout";
		}
		Long userId = (Long) session.getAttribute("userId");
		model.addAttribute("user", userService.findById(userId));
		model.addAttribute("allImgs", favoriteService.getAll());
		
	    return "dashboard.jsp";	    
	}
}
