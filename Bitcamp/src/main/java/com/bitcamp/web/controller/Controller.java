package com.bitcamp.web.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bitcamp.web.domain.Board;
import com.bitcamp.web.domain.Command;
import com.bitcamp.web.domain.Image;
import com.bitcamp.web.domain.Member;
import com.bitcamp.web.domain.Page;
import com.bitcamp.web.mapper.Mapper;
import com.bitcamp.web.service.ICountService;
import com.bitcamp.web.service.IGetService;
import com.bitcamp.web.service.ISearchService;
import com.bitcamp.web.util.FileProxy;
import com.bitcamp.web.util.PageAdapter;

@RestController
public class Controller {
	private static final Logger logger = LoggerFactory.getLogger(Controller.class);
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	@Autowired Member member;
	@Autowired Page page;
	@Autowired PageAdapter adapter;
	@Autowired Image image;
	@RequestMapping("/search/{keyword}")
	public Object searchOne(@PathVariable("keyword") String keyword, 
			@RequestBody HashMap<String, String> param){
		Object o = null;
		switch (param.get("type")) {
		case "member":
			o = new ISearchService() {
				@Override
				public Object execute(HashMap<?, ?> param) {
					return mapper.searchMemberById(param);
				}
			}.execute(param);
		case "admin":
			o = new ISearchService() {
				@Override
				public Object execute(HashMap<?, ?> param) {
					return mapper.searchMemberById(param);
				}
			}.execute(param);
		}
		return o;
	}
	
	@RequestMapping(value="/{type}/{id}/login", method=RequestMethod.POST, consumes="application/json")
	public Map<?,?> login(@PathVariable String type, @PathVariable String id, @RequestBody Member m) {
		Map<String, Object> map = new HashMap<>();
		logger.info("Welecom to {}", "login()");
		logger.info("ID {}", id);
		logger.info("PASS {}", m.getPass());
		logger.info("type {}", type);
		cmd = new Command();
		cmd.setType(type);
		switch (type) {
		case "member":
			cmd.setId("id");
			cmd.setPass("pass");
		break;
		case "admin":
			cmd.setId("adminId");
			cmd.setPass("adminPass");
			break;
		default:break;
		}
		cmd.setData1(id);
		cmd.setData2(m.getPass());
		int count = new ICountService() {
			@Override
			public int execute(Command cmd) {
				return mapper.exist(cmd);
			}
		}.execute(cmd);
		map.put("success", ""+count);
		logger.info("count {}", count);
		if(type.equals("member") && count == 1) {
			Member m2 = (Member) new IGetService() {
				@Override
				public Object execute(Command cmd) {
					return mapper.selectMemberById(cmd);
				}
			}.execute(cmd);
		map.put("user", m2);
		}
		return map;
	}
	
	@RequestMapping("/articles/{pageNum}")
	public Map<?, ?> getArticle(
			@PathVariable String pageNum){
		logger.info("Welcome to {} !", "getArticle()");
		Map<String, Object> map = new HashMap<>();
		page.setTotalCount(new ICountService() {
			@Override
			public int execute(Command cmd) {
				return mapper.existArticles(cmd);
			}
		}.execute(cmd));
		page.setPageNum(Integer.parseInt(pageNum));
		page.setBlockSize(5);
		page.setPageSize(5);
		page = (Page) adapter.attr(page);
		cmd.setId(page.getStartRow()+"");
		cmd.setPass(page.getEndRow()+"");
		map.put("list", (List<?>) new IGetService() {
			@Override
			public Object execute(Command cmd) {
				return mapper.articles(cmd);
			}
		}.execute(cmd));
		map.put("page", page);
		return map;
	}
	
	@RequestMapping(value="/boards/{seq}", method=RequestMethod.GET, consumes="application/json")
	public Map<?,?> getArticle() {
		Map<String, Object> map = new HashMap<>();
		return map;
		
	}
	@RequestMapping(value="/boards/{seq}", method=RequestMethod.PUT, consumes="application/json")
	public Map<?,?> putArticle(@PathVariable String seq) {
		Map<String, Object> map = new HashMap<>();
		return map;
		
	}
	@RequestMapping(value="/board/post/article", method=RequestMethod.POST, consumes="application/json")
	public Map<?,?> postArticle(@RequestBody Board b) {
		Map<String, Object> map = new HashMap<>();
		logger.info("Welcome To {}", "postArticle()");
		logger.info("넘어온 ID : {}", b.getId());
		logger.info("넘어온 글제목 : {}", b.getTitle());
		logger.info("넘어온 글내용 : {}", b.getContent());
		return map;
		
	}
	@RequestMapping(value="/board/file/upload",method=RequestMethod.POST)
	public Map<?,?> boardFileUpload(MultipartHttpServletRequest request, HttpSession sseion) 
		throws IllegalStateException, IOException{
		Map<String, Object> map = new HashMap<>();
		logger.info("Welcome To {}", "boardFileUpload()");
		FileProxy pxy = new FileProxy();
		Iterator<String> it = request.getFileNames();
		if(it.hasNext()) {
			MultipartFile file = request.getFile(it.next());
			String rootPath = request.getSession().getServletContext().getRealPath(null);
			String uploadPath = "resources/img/";
			String fileName = file.getOriginalFilename();
			System.out.println("파일 네임 : "+fileName);
			image.setImageId(new SimpleDateFormat("yymmdd_hhmmss_").format(new Date()));
			image.setFileName(fileName);
		}
		
/*		logger.info("Welcome To {}", "boardFileUpload()");
		Iterator<String> files = request.getFileNames();
		MultipartFile mFile = request.getFile(files.next());
		logger.info("file name is {}", mFile.getOriginalFilename());*/
		return map;
	}
	
}

