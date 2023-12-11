package com.goodspro.goodspro.mainController;

import java.util.List;

import com.goodspro.goodspro.dto.MessageDto;
import com.goodspro.goodspro.dto.SearchDto;
import com.goodspro.goodspro.paging.PagingResponse;
import org.apache.logging.log4j.message.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.goodspro.goodspro.dto.BoardDto;
import com.goodspro.goodspro.service.BoardServiceImpl;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class MainController {

	@Autowired
	BoardServiceImpl boardService;
	
	@GetMapping("/")
	public String home(@ModelAttribute("params") final SearchDto params, Model model) {
		PagingResponse<BoardDto> response = boardService.findAll(params);
		model.addAttribute("response", response);
		return "home";
	}
	
	@PostMapping("/write")
	public String write(BoardDto boardDto, Model model) {
		boardService.insert(boardDto);
		MessageDto message = new MessageDto("게시글 생성이 완료되었습니다.", "/#signup", RequestMethod.GET, null);
		return showMessageAndRedirect(message, model);
	}

	// 사용자에게 메시지를 전달하고, 페이지를 리다이렉트 한다.
	private String showMessageAndRedirect(final MessageDto params, Model model) {
		model.addAttribute("params", params);
		return "common/messageRedirect";
	}
	
}
