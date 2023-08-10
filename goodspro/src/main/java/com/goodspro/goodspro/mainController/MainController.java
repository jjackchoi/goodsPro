package com.goodspro.goodspro.mainController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.goodspro.goodspro.boardDto.BoardDto;
import com.goodspro.goodspro.service.BoardServiceImpl;


@Controller
public class MainController {

	@Autowired
	BoardServiceImpl boardService;
	
	@GetMapping("/")
	public String home(Model model) {
		List<BoardDto> posts = boardService.findAll();
		model.addAttribute("posts", posts);
		return "home";
	}
	
	@PostMapping("/write")
	public String write(BoardDto boardDto) {
		System.out.println(boardDto.getBoardTitle()+boardDto.getBoardContent());
		boardService.insert(boardDto);
		
		return "redirect:/#signup";
	}
	
}
