import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HomeComponent } from './pages/home/home.component';
import { GetEstudantesComponent } from './pages/get-estudantes/get-estudantes.component';
import { RegisterEstudanteComponent } from './pages/register-estudante/register-estudante.component';
import { GetAcompanhamentosComponent } from './pages/get-acompanhamentos/get-acompanhamentos.component';
import { RegisterAcompanhamentoComponent } from './pages/register-acompanhamento/register-acompanhamento.component';
import { UpdateAcompanhamentoComponent } from './pages/update-acompanhamento/update-acompanhamento.component';
import { PublicoComponent } from './shared/layouts/publico/publico.component';
import { PrivadoComponent } from './shared/layouts/privado/privado.component';
import { RotaErradaComponent } from './pages/rota-errada/rota-errada.component';
import { ErroComponent } from './pages/erro/erro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    GetEstudantesComponent,
    RegisterEstudanteComponent,
    GetAcompanhamentosComponent,
    RegisterAcompanhamentoComponent,
    UpdateAcompanhamentoComponent,
    PublicoComponent,
    PrivadoComponent,
    RotaErradaComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [provideNgxMask(), DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }


