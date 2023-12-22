import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
interface ButtonStyle {
  label: '',
  borderRadius: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  fontSize?: string;
  fontWeight? : string
  fontFamily?: string;
  lineHeight?: string;
  letterSpacing?: string;
  cursor?: string;
  background?: string;
  color?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  iconRtl? : boolean;
  iconLtr? : boolean;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule , FormsModule , ColorPickerModule ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  // label = '';
  buttonLabel = '';
  // border_radius = '';
  colorBg = '';
  colorLabel = '#000000';
  colorBorder = 'transparent';

  iconRtl = true;
  iconLtr = true;

  buttonForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
     this.createForm();
  }

  createForm(){
    this.buttonForm = this.fb.group({
      label: '',
      background: '',
      color: '',
      borderRadius: '',
      borderColor: '',
      borderWidth: '',
      borderStyle: 'solid',
      paddingTop: '',
      paddingBottom: '',
      paddingLeft: '',
      paddingRight: '',
      marginTop: '',
      marginBottom: '',
      marginLeft: '',
      marginRight: '',
      fontSize: '',
      fontWeight: '',
      fontFamily: 'Arial',
      lineHeight: '',
      letterSpacing: '',
      cursor: 'pointer',
      backgroundImage: 'url(./../../../assets/images/Frame%2057764.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center center',
      iconRtl : false,
      iconLtr : false,
    });
  }

  // onInputChange() {
  //   // دیگر این کد نیازی به اجرا نیست، چرا که از formControlName استفاده می‌کنید
  //   // this.buttonLabel = this.label;
  //   // this.border_radius = this.buttonForm.value.borderRadius;

  //   // مقدار رنگ انتخابی به متغیر مرتبط انتقال یابد
  //   // this.buttonForm.get('background')?.setValue(this.colorBg);
  //   console.log(this.colorBg);

  //   this.buttonForm.get('background')?.setValue(this.colorBg);
  //   console.log('fghgd');

  // }


  onColorChange(color: string , type : string) {
    console.log(color);

    this.buttonForm.get(type)?.setValue(color);
  }


  onSubmit() {
    // انجام عملیات مربوط به ارسال فرم
    console.log(this.buttonForm.value);
  }
}
