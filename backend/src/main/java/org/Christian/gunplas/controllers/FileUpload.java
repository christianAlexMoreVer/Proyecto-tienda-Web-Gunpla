package org.Christian.gunplas.controllers;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "http://localhost:8100")
public class FileUpload {

	@PostMapping("/image/maqueta")
	public void uploadFileMaquetas(@RequestParam("file") MultipartFile file, String name) throws IOException {
		OutputStream outputStream = null;
		byte[] fileBytes = file.getBytes();
		outputStream = new FileOutputStream(new File("src/main/resources/static/img/maquetas" , name));
		outputStream.write(fileBytes);
	}	
	
	@PostMapping("/image/user")
	public void uploadFileUser(@RequestParam("file") MultipartFile file, String name) throws IOException {
		OutputStream outputStream = null;
		byte[] fileBytes = file.getBytes();
		outputStream = new FileOutputStream(new File("src/main/resources/static/img/Usuario" , name));
		outputStream.write(fileBytes);
	}	
	
}
