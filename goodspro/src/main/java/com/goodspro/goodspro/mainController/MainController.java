package com.goodspro.goodspro.mainController;

import java.util.List;

import com.goodspro.goodspro.dto.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.goodspro.goodspro.dto.BoardDto;
import com.goodspro.goodspro.service.BoardServiceImpl;


@Controller
public class MainController {

	@Autowired
	BoardServiceImpl boardService;
	
	@GetMapping("/")
	public String home(@ModelAttribute("params") final SearchDto params, Model model) {
		List<BoardDto> posts = boardService.findAll(params);
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
