package com.teamgorm.projectforum.controller;

import com.teamgorm.projectforum.dto.PostDTO;
import com.teamgorm.projectforum.model.Post;
import com.teamgorm.projectforum.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Post Controller
 */
@CrossOrigin
@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    /**
     * Create a new post
     *
     * @param post The post created
     * @return
     */
    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_USER','ROLE_ADMIN')")
    public Post create(@RequestBody Post post) {
        return postService.create(post);
    }

    /**
     * Get a single post by id
     *
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public Post get(@PathVariable String id) {
        return postService.getById(id);
    }

//    /**
//     * Get posts by userId
//     *
//     * @param id
//     * @return
//     */
//    @GetMapping("/user/{id}")
//    public List<Post> getByUserId(@PathVariable(value = "id") String id) {
//        return postService.getByUserId(id);
//    }

    /**
     * Get paged posts by userId
     *
     * @param id
     * @return
     */
    @GetMapping("/user/{id}")
    public Page<Post> getByUserId(@PathVariable(value = "id") String id,
                                  @PageableDefault(size = 8) Pageable pageable) {
        return postService.getByUserId(id, pageable);
    }

    /**
     * Get all posts
     *
     * @return
     */
    @GetMapping
    public Page<PostDTO> getAll(@PageableDefault(size = 8) Pageable pageable) {
        return postService.getAll(pageable);
    }

    /**
     * Update a post by id
     *
     * @param id
     * @param post
     * @return
     */
    @PreAuthorize("@authController.getId() == #post.userId")
    @PutMapping("/{id}")
    public Post update(@PathVariable String id, @RequestBody Post post) {
        return postService.update(id, post);
    }

    /**
     * Delete a post by id
     *
     * @param id
     */
    @PreAuthorize("@authController.getId() == @postServiceImpl.getById(#id).getUserId()")
//@postServiceImpl.getById(#id).getUserId()
    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        postService.deleteById(id);
    }
}
