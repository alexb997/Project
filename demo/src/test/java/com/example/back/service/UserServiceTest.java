package com.example.back.service;

import com.example.back.model.Pieces;
import com.example.back.model.User;
import com.example.back.repository.UserRepository;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
public class UserServiceTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    private User mockUser = new User("test","testing");

    @Test
    public void loginUserTest(){
        Mockito.when(userRepository.findByUsernameAndPassword(Mockito.anyString(),Mockito.anyString())).thenReturn(Optional.of(mockUser));

        Optional<User> result = userService.loginUser("SomeUser","somePass");
        System.out.println(result.toString());
        assertThat(result).isNotEmpty();
    }

    @Test
    public void addNewUserTest() throws Exception{
        Mockito.when(userRepository.save(Mockito.any(User.class))).thenReturn(mockUser);

        User result = userService.addNewUser(new User());
        String expected ="User{id='null', username='test', password='testing'}";

        assertThat(result.toString()).isEqualTo(expected);
        System.out.println(result);
    }

    @Test
    public void getUserTest() throws Exception{
        Mockito.when(userRepository.findByUsername(Mockito.anyString())).thenReturn(Optional.ofNullable(mockUser));

        Optional<User> result = userService.findByUsername("someUser");

        System.out.println(result.toString());
        assertThat(result).isNotEmpty();
    }

    @Test
    public void removeByIDTest(){
        String mockId = "someID";
        userService.removeUserByID(mockId);
        Mockito.verify(userService).removeUserByID(mockId);
    }

}
