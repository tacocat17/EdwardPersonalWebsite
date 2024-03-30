import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";

export interface Post {
  title: string
  subtitle: string
  image: string
  text: string
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    NgForOf,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle,
    MatCardImage,
    MatButton,
    MatToolbar,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: Post[] = [
    {
      title: "Hello World",
      subtitle: "",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg",
      text: "This is my first recorded post on this website. I will be adding posts about my own life, activities, and other events. "
    },
    {
      title: "clash royale",
      subtitle: "emote",
      image: "https://i.kym-cdn.com/entries/icons/original/000/039/022/ddddd.jpg",
      text: "hehehehaw"
    },
    {
      title: "First Volunteer ",
      subtitle:"Volunteer",
      image:"",
      text:"During the spring break, I decided to do some volunteering to get some hours and experience"
    }
  ]

}
