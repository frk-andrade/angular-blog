import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""

  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }
//procura um artigo que tenha correspondência com o ID
  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id === id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }
}
